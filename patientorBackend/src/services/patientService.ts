import patients from "../data/patients";
import { NoSensitivePatientData } from "../types";

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

export default { getPatients };
