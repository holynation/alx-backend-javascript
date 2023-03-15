interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: any;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

/* eslint-disable @typescript-eslint/class-name-casing */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/* eslint-enable @typescript-eslint/class-name-casing */
export const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName.charAt(0)}. ${lastName}`;
};

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements IStudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this._firstName;
  }
}

export function createStudent(ctor: IStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new ctor(firstName, lastName);
}
