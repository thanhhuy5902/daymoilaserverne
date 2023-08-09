import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  async use(req: any, res: any, next: (error?: any) => void) {
    console.log('Request...');
    const idtoken = req.headers['authorization'];
    console.log(idtoken);
    if (idtoken === undefined) {
      res.status(401).send('Unauthorized');
      return;
    }
    const verifyidToken = await this.authService.verifyIdToken(idtoken);
    if (verifyidToken == null) {
      res.status(401).send('Unauthorized');
      return;
    }
    req.user = verifyidToken;

    next();
  }
}
