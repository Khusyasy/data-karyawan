const UserValidation = (values) => {
  const errors = {};
  if (!values.namaLengkap || values.namaLengkap === "") {
    errors.namaLengkap = "Nama harus diisi";
  }
  if (!values.alamat || values.alamat === "") {
    errors.alamat = "Alamat harus diisi";
  }
  if (!values.posisi || values.posisi === "") {
    errors.posisi = "Posisi harus diisi";
  }
  if (!values.provinsi || values.provinsi === "") {
    errors.provinsi = "Provinsi harus diisi";
  }
  if (!values.getProvinsi || values.getProvinsi === "") {
    errors.getProvinsi = "Provinsi harus dipilih";
  }
  if (!values.getKota || values.getKota === "") {
    errors.getKota = "Kota harus diisi";
  }
  if (!values.getKecamatan || values.getKecamatan === "") {
    errors.getKecamatan = "Kecamatan harus diisi";
  }
  if (!values.kota || values.kota === "") {
    errors.kota = "Kecamatan harus diisi";
  }
  if (!values.kecamatan || values.kecamatan === "") {
    errors.kecamatan = "Kecamatan harus diisi";
  }
  return errors;
};
export default UserValidation;
