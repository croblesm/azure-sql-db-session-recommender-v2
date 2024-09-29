-- delete from web.sessions_speakers where id=9;
insert into web.speakers
    (id, full_name, require_embeddings_update)
values
    (9, 'John Doe', 1)
go

-- delete from web.sessions where id=10;
insert into web.sessions 
    (id, title, abstract, external_id, start_time, end_time, require_embeddings_update)
values
    (
        10,
        'Como hacer pizza en casa', 
        'En esta sesion aprenderas a hacer pizza en casa. John Doe, experto en pizza, compartirá su experiencia y casos de éxito en la implementación de pizza en casa.',
        'S1',
        '2024-09-30 17:40:00',
        '2024-09-30 18:15:00',
        1
    )
go

-- delete from web.sessions_speakers where session_id=10 and speaker_id=9;
insert into web.sessions_speakers
    (session_id, speaker_id)
values
    (10, 9)
go