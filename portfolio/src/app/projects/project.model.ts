export class Project {
  public id: number;
  public name: string;
  public tech: string;
  public description: string;
  public img: string;

  constructor(id: number,name: string, tech: string, description: string, img: string) {
    this.id = id;
    this.name = name;
    this.tech = tech;
    this.description = description;
    this.img = img;
  }
}
