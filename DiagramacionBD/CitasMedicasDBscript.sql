/*==============================================================*/
/* DBMS name:      PostgreSQL                              */
/* Created on:     28/02/2025 9:50:12 a.m.                     */
/*==============================================================*/


/*==============================================================*/
/* Table: CITA                                                  */
/*==============================================================*/
create table CITA (
   IDCITA               INT4                 not null,
   IDDOCTOR             INT4                 not null,
   IDPACIENTE           INT4                 not null,
   IDCONSULTORIO        INT4                 not null,
   DIA                  INT4                 not null,
   MES                  INT4                 not null,
   ANIO                 INT4                 not null,
   HORA                 VARCHAR(5)           not null,
   constraint PK_CITA primary key (IDCITA)
);

/*==============================================================*/
/* Index: CITA_PK                                               */
/*==============================================================*/
create unique index CITA_PK on CITA (
IDCITA
);

/*==============================================================*/
/* Index: DOCTOR_CITA_FK                                        */
/*==============================================================*/
create  index DOCTOR_CITA_FK on CITA (
IDDOCTOR
);

/*==============================================================*/
/* Index: PACIENTE_CITA_FK                                      */
/*==============================================================*/
create  index PACIENTE_CITA_FK on CITA (
IDPACIENTE
);

/*==============================================================*/
/* Index: CONSULTORIO_CITA_FK                                   */
/*==============================================================*/
create  index CONSULTORIO_CITA_FK on CITA (
IDCONSULTORIO
);

/*==============================================================*/
/* Table: CONSULTORIO                                           */
/*==============================================================*/
create table CONSULTORIO (
   IDCONSULTORIO        INT4                 not null,
   NOMBRECONSULTORIO    VARCHAR(30)          not null,
   PISO                 INT4                 not null,
   constraint PK_CONSULTORIO primary key (IDCONSULTORIO)
);

/*==============================================================*/
/* Index: CONSULTORIO_PK                                        */
/*==============================================================*/
create unique index CONSULTORIO_PK on CONSULTORIO (
IDCONSULTORIO
);

/*==============================================================*/
/* Table: DOCTOR                                                */
/*==============================================================*/
create table DOCTOR (
   IDDOCTOR             INT4                 not null,
   IDPERSONA            INT4                 not null,
   ESPECIALIDAD         VARCHAR(30)          null,
   constraint PK_DOCTOR primary key (IDDOCTOR)
);

/*==============================================================*/
/* Index: DOCTOR_PK                                             */
/*==============================================================*/
create unique index DOCTOR_PK on DOCTOR (
IDDOCTOR
);

/*==============================================================*/
/* Index: PERSONA_DOCTOR_FK                                     */
/*==============================================================*/
create  index PERSONA_DOCTOR_FK on DOCTOR (
IDPERSONA
);

/*==============================================================*/
/* Table: PACIENTE                                              */
/*==============================================================*/
create table PACIENTE (
   IDPACIENTE           INT4                 not null,
   IDPERSONA            INT4                 not null,
   PATOLOGIA            VARCHAR(30)          null,
   constraint PK_PACIENTE primary key (IDPACIENTE)
);

/*==============================================================*/
/* Index: PACIENTE_PK                                           */
/*==============================================================*/
create unique index PACIENTE_PK on PACIENTE (
IDPACIENTE
);

/*==============================================================*/
/* Index: PERSONA_PACIENTE_FK                                   */
/*==============================================================*/
create  index PERSONA_PACIENTE_FK on PACIENTE (
IDPERSONA
);

/*==============================================================*/
/* Table: PERSONA                                               */
/*==============================================================*/
create table PERSONA (
   IDPERSONA            INT4                 not null,
   NOMBREPERSONA        VARCHAR(30)          not null,
   APELLIDOPERSONA      VARCHAR(30)          not null,
   NUMDOCUMENTO         INT4                 not null,
   constraint PK_PERSONA primary key (IDPERSONA)
);

/*==============================================================*/
/* Index: PERSONA_PK                                            */
/*==============================================================*/
create unique index PERSONA_PK on PERSONA (
IDPERSONA
);

alter table CITA
   add constraint FK_CITA_CONSULTOR_CONSULTO foreign key (IDCONSULTORIO)
      references CONSULTORIO (IDCONSULTORIO)
      on delete restrict on update restrict;

alter table CITA
   add constraint FK_CITA_DOCTOR_CI_DOCTOR foreign key (IDDOCTOR)
      references DOCTOR (IDDOCTOR)
      on delete restrict on update restrict;

alter table CITA
   add constraint FK_CITA_PACIENTE__PACIENTE foreign key (IDPACIENTE)
      references PACIENTE (IDPACIENTE)
      on delete restrict on update restrict;

alter table DOCTOR
   add constraint FK_DOCTOR_PERSONA_D_PERSONA foreign key (IDPERSONA)
      references PERSONA (IDPERSONA)
      on delete restrict on update restrict;

alter table PACIENTE
   add constraint FK_PACIENTE_PERSONA_P_PERSONA foreign key (IDPERSONA)
      references PERSONA (IDPERSONA)
      on delete restrict on update restrict;

insert into
  persona (
    IDPERSONA,
    NOMBREPERSONA,
    APELLIDOPERSONA,
    NUMDOCUMENTO
  )
values
  (1, 'Juan', 'Pérez', 12345678),
  (2, 'María', 'González', 23456789),
  (3, 'Carlos', 'Rodríguez', 34567890),
  (4, 'Ana', 'López', 45678901),
  (5, 'Luis', 'Martínez', 56789012),
  (6, 'Carmen', 'García', 67890123),
  (7, 'José', 'Hernández', 78901234),
  (8, 'Laura', 'Fernández', 89012345),
  (9, 'Miguel', 'Sánchez', 90123456),
  (10, 'Lucía', 'Ramírez', 10123457),
  (11, 'Pedro', 'Díaz', 11234567),
  (12, 'Rosa', 'Torres', 12345678),
  (13, 'Javier', 'Pérez', 23456789),
  (14, 'Sofía', 'González', 34567890),
  (15, 'Elena', 'Rodríguez', 45678901),
  (16, 'Manuel', 'López', 56789012),
  (17, 'Isabel', 'Martínez', 67890123),
  (18, 'Antonio', 'García', 78901234),
  (19, 'Silvia', 'Hernández', 89012345),
  (20, 'Raúl', 'Fernández', 90123456);

insert into consultorio (
   IDCONSULTORIO,
   NOMBRECONSULTORIO,
   PISO
)
values
   (1, 'Consultorio 1', 1),
   (2, 'Consultorio 2', 2),
   (3, 'Consultorio 3', 3),
   (4, 'Consultorio 4', 4),
   (5, 'Consultorio 5', 5),
   (6, 'Consultorio 6', 6),
   (7, 'Consultorio 7', 7),
   (8, 'Consultorio 8', 8),
   (9, 'Consultorio 9', 9),
   (10, 'Consultorio 10', 10);

insert into doctor (
   IDDOCTOR,
   IDPERSONA,
   ESPECIALIDAD
)
values
   (1, 1, 'Cardiología'),
   (2, 2, 'Neurología'),
   (3, 3, 'Ortopedia'),
   (4, 4, 'Pediatría'),
   (5, 5, 'Dermatología'),
   (6, 6, 'Psiquiatría'),
   (7, 7, 'Radiología'),
   (8, 8, 'Oncología'),
   (9, 9, 'Gastroenterología'),
   (10, 10, 'Urología');

insert into paciente (
   IDPACIENTE,
   IDPERSONA,
   PATOLOGIA
)
values
   (1, 11, 'Hipertensión'),
   (2, 12, 'Epilepsia'),
   (3, 13, 'Artrosis'),
   (4, 14, 'Asma'),
   (5, 15, 'Acné'),
   (6, 16, 'Depresión'),
   (7, 17, 'Cáncer'),
   (8, 18, 'Colitis'),
   (9, 19, 'Cirrosis'),
   (10, 20, 'Infección urinaria');

insert into cita (
   IDCITA,
   IDDOCTOR,
   IDPACIENTE,
   IDCONSULTORIO,
   DIA,
   MES,
   ANIO,
   HORA
)
values
   (1, 1, 1, 1, 1, 1, 2025, '08:00'),
   (2, 2, 2, 2, 2, 2, 2025, '09:00'),
   (3, 3, 3, 3, 3, 3, 2025, '10:00'),
   (4, 4, 4, 4, 4, 4, 2025, '11:00'),
   (5, 5, 5, 5, 5, 5, 2025, '12:00'),
   (6, 6, 6, 6, 6, 6, 2025, '13:00'),
   (7, 7, 7, 7, 7, 7, 2025, '14:00'),
   (8, 8, 8, 8, 8, 8, 2025, '15:00'),
   (9, 9, 9, 9, 9, 9, 2025, '16:00'),
   (10, 10, 10, 10, 10, 10, 2025, '17:00');