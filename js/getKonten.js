export function isiDataProposal(results) {
  const inputMapping = [
    { id: "judul", path: "judul" },
    { id: "anggota", path: "anggota" },
    { id: "teamImage", path: "teamImage" },
    // { id: "mhs1", path: "biodata_mahasiswa._id" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.innerHTML = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  console.log(`Value at path ${path}:`, value);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
}
