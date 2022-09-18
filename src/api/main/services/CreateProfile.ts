export interface CreateProfileRepository {
  create: () => Promise<void>
}

export namespace CreateProfileRepository {
  export type Params = {
    user_id: string
    name: string
    image: string
  }
}

export class CreateProfileService {
  constructor (
    private readonly profileRepo: CreateProfileRepository
  ) { }

  async execute (): Promise<void> {

  }
}