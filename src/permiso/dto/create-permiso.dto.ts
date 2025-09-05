import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreatePermisoDto {

  @IsNumber({}, { message: "El campo debe ser un número" })
  @Min(10, { message: "El valor mínimo del id es 10" })
  @Max(50, { message: "El valor máximo del id es 10" })
  @ApiProperty({ required: true, minimum: 10, maximum: 50 })
  id: number;

  @IsString()
  @ApiProperty()
  nombre: string;

  @IsString()
  @ApiProperty()
  accion: string;

}
