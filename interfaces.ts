export interface EntryTest {
    isPassed: boolean,
    obtainedMarks: number,
    totalMarks: number,
}

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    rollNo: number;
    email: string;
    isOnsiteAllowed: boolean;
    entryTest: EntryTest
}