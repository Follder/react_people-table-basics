export interface Person {
  name: string;
  sex: 'f' | 'm';
  born: number;
  died: number;
  fatherName: string | null;
  motherName: string | null;
  slug: string;
  mother?: Person;
  father?: Person;
}