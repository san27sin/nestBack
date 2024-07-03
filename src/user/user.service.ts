import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {
	
	}
	
	create(user: Partial<User>) {
		return this.prismaService.user.create({
			data: { email: user.email, password: user.password, roles: ['USER'] }
		});
	}
	
	// TODO удалять / находить по id или email /
}
