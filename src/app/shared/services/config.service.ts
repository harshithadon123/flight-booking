import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    public ApiBaseUrl = 'https://flight-booking-api.herokuapp.com/api/v1';
    public DefaultPageSize = 10;
    public PageSizeOptions: number[] = [10, 25, 50];
}
