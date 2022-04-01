import axios from "axios";
import { useState } from "react";
import Input from "./components/Input";

type PetFormData = {
  name: string;
  age: number;
  animal_type: string;
  color: string;
}

const CreatePetForm = () => {
  const [petFormDtata, setPetFormDtata] = useState<PetFormData>({
    name: '',
    age: 0,
    animal_type: '',
    color: '',
  });

  const {
    name,
    age,
    animal_type,
    color,
  } = petFormDtata;

  const onSubmit = async (params: PetFormData) => {
    await axios.post('https://pet-store-api.herokuapp.com/api/v1/pets', {
      ...params
    });
  }

  return <div>
    <Input
      label="Pet name"
      value={name}
      onChange={(val) => setPetFormDtata({ ...petFormDtata, name: val })}
    />
    <Input
      label="Age"
      value={String(age)}
      onChange={(val) => setPetFormDtata({ ...petFormDtata, age: Number(val) })}
    />
    <Input
      label="Breed"
      value={animal_type}
      onChange={(val) => setPetFormDtata({ ...petFormDtata, animal_type: val })}
    />
    <Input
      label="Color"
      value={color}
      onChange={(val) => setPetFormDtata({ ...petFormDtata, color: val })}
    />
    <button onClick={() => onSubmit(petFormDtata)}>Add Pet</button>
  </div>
}

export default CreatePetForm;
