import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('customers')
export class CustomersController {
    @Get()
    findAll(@Req() request: Request): string{
        console.log(request);        
        
        return 'This action returns all customers';
    }
}
