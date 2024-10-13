import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PatientContextProps {
  patientId: number | null;
  setPatientId: (id: number) => void;
}

const PatientContext = createContext<PatientContextProps>({
  patientId: null,
  setPatientId: () => {},
});

export const PatientProvider = ({ children }: { children: ReactNode }) => {
  const [patientId, setPatientId] = useState<number | null>(() => {
    if (typeof window !== "undefined") {
      const storedPatientId = localStorage.getItem('patientId');
      return storedPatientId ? parseInt(storedPatientId) : null;
    }
    return null;
  });

  useEffect(() => {
    if (patientId !== null) {
      localStorage.setItem('patientId', patientId.toString());
    }
  }, [patientId]);

  return (
    <PatientContext.Provider value={{ patientId, setPatientId }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatientContext = () => useContext(PatientContext);
