import { Student } from '@/models';
import * as React from 'react';


export interface StudentCardProps {
  student: Student
}

export function StudentCard({ student }: StudentCardProps) {
  const { name, isHero } = student

  return (
    <div>
      Student: {name} {isHero ? 'Hero' : 'No-Hero'}
    </div>
  );
}
