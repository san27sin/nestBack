import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../types/User'

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) { }
	
	create(user: Partial<User>) {
		return this.prismaService.user.create({
			data: { email: user.email, password: user.password, roles: ['USER'] }
		});
	}

	delete(id: number) {
		return this.prismaService.user.delete({ id });
	}

	findById(id: number) {

	}

	findByEmail(email: string) {

	}

	// TODO удалять / находить по id или email /
}
