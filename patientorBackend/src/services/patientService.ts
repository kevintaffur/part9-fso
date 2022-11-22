import patients from "../data/patients";
import { NoSensitivePatientData, Patient } from "../types";

const getPatients = (): Array<NoSensitivePatientData> => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => {
    return {
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
    };
  });
};

const getPatientById = (id: string): Patient | undefined => {
  return patients.find((patient) => patient.id === id);
};

const addPatient = (newPatient: Patient): Patient => {
  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, addPatient, getPatientById };
