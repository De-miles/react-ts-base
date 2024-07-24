import { Student } from '@/models';


export interface StudentCardProps {
  student: Student
  onClick?: (student: Student) => void
}

export function StudentCard({ student, onClick }: StudentCardProps) {
  const { name, isHero } = student

  return (
    <div onClick={() => onClick?.(student)}>
      Student: {name} {isHero ? 'Hero' : 'No-Hero'}
    </div>
  );
}
