// src/app/profil/[id]/page.tsx

export const metadata = { title: 'Detail profilu | Snapzoška' };

export default function ProfileDetails({ params }: {
    params: { id: string }
  }) {
  const { id } = params
  
  return (
    <h1>Details about profile with id: {id} </h1>
  );
}