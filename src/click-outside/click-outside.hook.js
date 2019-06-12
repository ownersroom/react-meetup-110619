import { useEffect } from 'react';

function useClickOutside(ref, callback) {
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    }

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, [callback, ref]);
}

export { useClickOutside };
