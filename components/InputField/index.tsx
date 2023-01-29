import styles from './styles.module.css';
import EyeOn from './EyeOn.svg';
import EyeOff from './EyeOff.svg';
import { useRef, useState, useEffect } from 'react';

type Props = {
    color: string;
    placeholder: string;
    value: string;
    onChange: (newValue: string) => void;
    password?: boolean;
    warning?: boolean;
}

export const InputField = ({ color, placeholder, value, onChange, password, warning }: Props) => {
    const [focused, setFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!focused) return;
        if (inputRef && inputRef.current) {
            const end = inputRef.current.value.length;
            inputRef.current.setSelectionRange(end, end);
            inputRef.current.focus();
        }
       
    }, [focused]);

    const handleEyeToggle = () => {
        setFocused(!focused);
        setShowPassword(!showPassword);
    }

    return (
        <div 
            className={styles.container} 
            style={{
                borderColor: !warning ? (focused ? color : '#F9F9FB') : '#F00',
                backgroundColor: focused ? '#FFF' : '#F9F9FB'
            }}
        >
            <input 
                type={password && !showPassword ? 'password' : 'text'}
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                ref={inputRef}
            />
            {password &&
                <div className={styles.showPassword} onClick={handleEyeToggle}>
                    {showPassword && <EyeOn color='#BBB' />}
                    {!showPassword && <EyeOff color='#BBB' />}
                </div>
            }
        </div>
    );
}