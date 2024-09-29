-- Speaker Juan Pedro Graciano
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (1, 'Juan Pedro Graciano', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        1,
        'Inteligencia Artificial en Accion', 
        'Conoce sobre estrategias y resultados tangibles de la inteligencia artificial en los negocios. En esta sesion, Juan Pedro Graciano, experto en IA, compartirá su experiencia y casos de éxito en la implementación de IA en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 09:45:00',
        '2024-09-30 10:30:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (1, 1)
go;

-- Speaker Giovanni Carpanetti
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (2, 'Giovanni Carpanetti', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        2,
        'IA para seguridad', 
        'Aprende a defender tu empresa de los ciberataques con IA. En esta sesion, Giovanni Carpanetti, experto en seguridad y cumplimiento, compartirá su experiencia y casos de éxito en la implementación de IA en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 09:45:00',
        '2024-09-30 10:30:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (2, 2)
go;

-- Speaker Carlos Robles
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (3, 'Carlos Robles', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        3,
        'Azure SQL y Open AI', 
        'Aprende a crear aplicaciones inteligentes con Azure SQL y OpenAI usando la arquitectura RAG. Descubre cómo almacenar y buscar vectores, e integrar datos propios en modelos de IA para una interacción natural.',
        'S1',
        '2024-09-30 09:45:00',
        '2024-09-30 10:30:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (3, 3)
go;


-- Speaker Geovani de Leon
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (4, 'Geovani de Leon', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        4,
        'Innove con el poder de la IA y Low code de Power Platform', 
        'Descubre cómo la IA y el low code de Power Platform pueden ayudarte a innovar en tu empresa. En esta sesion, Geovani de Leon, experto en Power Platform, compartirá su experiencia y casos de éxito en la implementación de IA y low code en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 10:30:00',
        '2024-09-30 11:15:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (4, 4)
go;

-- Speaker Geivanni Carpanetti
insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        5,
        'Desbloqueando la seguridad de datos con Microsoft Purview', 
        'Descubre cómo Microsoft Purview puede ayudarte a desbloquear la seguridad de tus datos. En esta sesion, Giovanni Carpanetti, experto en seguridad y cumplimiento, compartirá su experiencia y casos de éxito en la implementación de Microsoft Purview en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 10:30:00',
        '2024-09-30 11:15:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (5, 2)
go;

-- Speaker Christian Araujo
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (5, 'Christian Araujo', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        6,
        'Microsoft Fabric: Que es lo nuevo y que viene', 
        'Descubre las novedades de Microsoft Fabric y lo que viene en el futuro. En esta sesion, Christian Araujo, experto en Microsoft Fabric, compartirá su experiencia y casos de éxito en la implementación de Microsoft Fabric en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 10:30:00',
        '2024-09-30 11:15:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (6, 5)
go;

-- Speaker Marlon Ramos
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (6, 'Marlos Ramos', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        7,
        'Descubre lo nuevo en GitHub Copilot y Visual Studio', 
        'Descubre las novedades de GitHub Copilot y Visual Studio. En esta sesion, Marlon Ramos, experto en GitHub Copilot y Visual Studio, compartirá su experiencia y casos de éxito en la implementación de GitHub Copilot y Visual Studio en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 11:15:00',
        '2024-09-30 12:00:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (7, 6)
go;

-- Speaker Juan Francisco Escobar
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (7, 'Juan Francisco Escobar', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        8,
        'Aspectos tecnicos y de seguridad en la implementacion de Copilot para M365', 
        'Descubre los aspectos tecnicos y de seguridad en la implementacion de Copilot para Microsoft 365. En esta sesion, Juan Francisco Escobar, experto en M365, compartirá su experiencia y casos de éxito en la implementación de Copilot para M365 en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 11:15:00',
        '2024-09-30 12:00:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (8, 7)
go;

-- Speaker Carlos Lone
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (8, 'Carlos Lone', 1)
go

insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        9,
        'Modernizacion de aplicaciones e innovacion en Azure', 
        'Descubre cómo modernizar tus aplicaciones e innovar en Azure. En esta sesion, Carlos Lone, experto en Azure, compartirá su experiencia y casos de éxito en la modernización de aplicaciones e innovación en Azure en empresas de diferentes tamaños y sectores.',
        'S1',
        '2024-09-30 11:15:00',
        '2024-09-30 12:00:00',
        1
    )
go

insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (9, 8)
go;