/*==============================================================*/
/* DBMS name:      PostgreSQL                                   */
/* Created on:     27/02/2025 8:57:08 p.m.                      */
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

