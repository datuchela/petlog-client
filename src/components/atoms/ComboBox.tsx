import { useState } from "react";
import { Combobox } from "@headlessui/react";

type ComboBoxPropsType = {
  arrayOfData: Array<{ id: number; name: string }>;
};

const ComboBox: React.FC<ComboBoxPropsType> = ({ arrayOfData }) => {
  const [selectedPerson, setSelectedPerson] = useState(arrayOfData[0]);
  const [query, setQuery] = useState<string>("");

  const filteredArrayOfData =
    query === ""
      ? arrayOfData
      : arrayOfData.filter((entry) => {
          return entry.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
      <Combobox.Options>
        {filteredArrayOfData.map((entry) => (
          <Combobox.Option key={entry.id} value={entry.id}>
            {entry.name}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default ComboBox;
