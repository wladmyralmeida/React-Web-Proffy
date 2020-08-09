import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

function TeacherList() {
    //Salvar a lista de professores dentro de um estado para mostrar na tela;
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        //só pode enviar direto se for req do tipo post ou put. Ou usa async await ou then e catch
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Pedagogia', label: 'Pedagogia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'História', label: 'História' },
                            { value: 'Programação Web', label: 'Programação Web' },
                            { value: 'Programação Mobile', label: 'Programação Mobile' },
                            { value: 'Programação Server', label: 'Programação Server' },
                            { value: 'Administração', label: 'Administração' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Religião', label: 'Religião' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Física', label: 'Física' },
                        ]}
                    />

                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-Feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-Feira' },
                            { value: '5', label: 'Sexta-Feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={e => { setTime(e.target.value) }} />

                    <button type='submit'>
                        Bucar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    );
}

export default TeacherList;