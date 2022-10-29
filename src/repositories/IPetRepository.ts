import Pet from "../entities/Pet";

export interface IPetRepository {
  findById(petId: string): Promise<Pet>;
  getAll(user_id: string): Promise<Pet[]>;
  save(pet: Pet): Promise<Pet>;
  update(petId: string, params: any): Promise<Pet>;
  delete(petId: string): Promise<void>;
}
