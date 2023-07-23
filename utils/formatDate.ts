export const formatDate = (inputDate: string) => {
  const [year, month, day] = inputDate.split('-')
  const formattedDate = `${day}/${month}/${year.substr(2)}`
  return formattedDate
}
