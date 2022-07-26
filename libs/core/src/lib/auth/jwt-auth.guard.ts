import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor() {
        super();
    }

    // Needed to attach to passport strategy.
    getRequest(context: ExecutionContext) {
        console.log("Inside jwt auth guard");
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}