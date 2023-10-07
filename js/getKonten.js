export function isiDataProposal(results) {
  const inputMapping = [
    { id: "judul", path: "judul" },
    { id: "anggota1", path: "nama.anggota1" },
    { id: "anggota2", path: "nama.anggota2" },
    // { id: "mhs1", path: "biodata_mahasiswa._id" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.value = value;
  });
}

function getNestedValue(obj, path, index, property) {
  const value = path
    .split(".")
    .reduce((value, key) => (value && value[key] ? value[key] : ""), obj);
  // console.log(`Value at path ${path}:`, value);

  if (
    Array.isArray(value) &&
    value.length > index &&
    value[index].hasOwnProperty(property)
  ) {
    return value[index][property];
  }

  return value;
}
