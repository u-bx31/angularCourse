export interface Room{
    avaibleRooms:number;
    bookedRooms:number;
    totalRooms:number;
}

export interface RoomList {
    roomNumber? : string;
    roomType : string;
    price : number;
    photos?: string ;
    checkinTime : Date;
    checkoutTime : Date;
    rating : number;
}