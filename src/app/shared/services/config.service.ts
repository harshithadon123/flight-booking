import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    public ApiBaseUrl: string = 'https://flight-booking-api.herokuapp.com/api/v1';
    public DefaultPageSize: number = 10;
    public PageSizeOptions: number[] = [10, 25, 50];
}
