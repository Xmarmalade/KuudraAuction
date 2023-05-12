export const convertMStoDate = (ms: number) => {
    const total_seconds = Math.floor(ms / 1000);
    const total_minutes = Math.floor(total_seconds / 60);
    const total_hours = Math.floor(total_minutes / 60);
    const days = Math.floor(total_hours / 24);
    
    const seconds = total_seconds % 60;
    const minutes = total_minutes % 60;
    const hours = total_hours % 60;

    return [days, hours, minutes, seconds];
};

export const converMStoMinSec = (ms: number) => {
    const total_seconds = Math.floor(ms / 1000);
    const mins = Math.floor(total_seconds / 60);
    const secs = total_seconds - mins * 60;
    return [mins, secs];
};