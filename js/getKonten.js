export function isiDataIndex(results) {
  const inputMapping = [
    { id: "judul", path: "index.judul" },
    { id: "anggota1", path: "anggota1" },
    { id: "anggota2", path: "anggota2" },
    { id: "prodi", path: "index.prodi" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.innerHTML = value;
  });
}

export function isiDataProposal(results) {
  const inputMapping = [
    { id: "title", path: "proposal.title" },
    { id: "judulproyek", path: "proposal.judulproyek" },
    { id: "anggota1", path: "anggota1" },
    { id: "anggota2", path: "anggota2" },
    { id: "latarbelakang", path: "proposal.latarbelakang" },
    { id: "deskripsiaplikasi", path: "proposal.deskripsiaplikasi" },
    { id: "tujuan", path: "proposal.tujuan" },
    { id: "kesimpulan", path: "proposal.kesimpulan" },
  ];

  inputMapping.forEach(({ id, path, index, property }) => {
    const inputElement = document.getElementById(id);
    const value = getNestedValue(results, path, index, property);
    inputElement.innerHTML = value;
  });
}

export function isiDataTeam(results) {
  const inputMapping = [
    { id: "anggota", path: "team.anggota" },
    { id: "image", path: "team.image" },
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
