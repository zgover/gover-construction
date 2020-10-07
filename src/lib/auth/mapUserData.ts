export const mapUserData = (user: any) => {
  const { uid, email, xa } = user
  return {
    id: uid,
    email,
    token: xa,
  }
}
