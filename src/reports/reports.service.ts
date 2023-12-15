import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm"
import {InjectRepository} from "@nestjs/typeorm"
import { Report } from './report.entity';
import { privateDecrypt } from 'crypto';


@Injectable()
export class ReportsService {

    constructor(
        @InjectRepository(Report)
        private readonly reportRepository: Repository<Report>
    ){}
}
