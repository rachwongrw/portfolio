export class Project {
  public name: string;
  public tech: string;
  public description: string;
  public img: string;

  constructor(name: string, tech: string, description: string, img: string) {
    this.name = name;
    this.tech = tech;
    this.description = description;
    this.img = img;
  }
}
