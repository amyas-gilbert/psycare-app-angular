export class Guest {
  constructor(
    public name: string,
    public gender: string,
    public age: string,
    public highRisk: boolean,
    public arrivalTime: string,
    public arrivalDay: string,
    public arrivedWith: string,
    public reason: string,
    public mentalHealth: string,
    public drugPrimary: string,
    public drugSecondary: string,
    public drugTertiary: string,
    public description: string,
    public arrivalNotes: string,
    public observations: string,
    public departureTime: string,
    public departureDay: string,
    public summary: string,
    public id?: string) {}
}
