import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateCustomerDto } from './create-customer.dto';
import { Request } from 'express';

@Controller('customers')
export class CustomersController {
    @Get()
    findAll(@Req() request: Request): string{
        console.log(request);        
        
        return 'This action returns all customers';
    }

    @Get(':id')
    findOne(@Param('id') id: string): string{
        return `This action returns customer that have ${id} id`;
    }

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto): Promise<string>{   
        console.log(createCustomerDto);
        
        return 'This action add new Customer';
    }
}
