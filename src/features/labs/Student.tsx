import * as React from 'react';

export interface StudentProps {
  name?: string
  age: number
  isHero?: boolean
  hobbyList: string[]
  sayHello: () => void
}

export function Student({ name = 'truong', isHero = false }: StudentProps) {
  return (
    <div>
      Student: {name} {isHero ? 'Hero' : 'No-Hero'}
    </div>
  );
}
