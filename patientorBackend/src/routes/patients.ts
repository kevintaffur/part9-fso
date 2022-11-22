import express from "express";
import patientService from "../services/patientService";
import { v1 as uuid } from "uuid";
import toNewPatient from "../utils";
import { Patient } from "../types";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getPatients());
});

router.post("/", (req, res) => {
  const id: string = uuid();

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newPatient = toNewPatient(req.body) as Patient;
    newPatient.id = id;
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = "";
    if (error instanceof Error) {
      errorMessage = "Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

router.get("/:id", (req, res) => {
  const patient = patientService.getPatientById(req.params.id);
  if (!patient) {
    res.status(404).send({
      error: "Patient not found",
    });
  }
  res.send(patient);
});

export default router;
