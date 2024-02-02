import moment from 'moment';

function dataIso(data) {
    if (data) {
        return moment(data).locale('pt-br').format('DD/MM/YYYY');
    }
    return undefined;
}

function dataHoraIso(data) {
    if (data){
        return moment(data).locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
    }
    return undefined;
}

function dataAmericana(data) {
    if (data){
        return moment(data).format('YYYY-MM-DD');
    }
    return undefined;
}

function dataIsoAmericana(data) {
    if (data){
        let dataAmericana = moment(data).locale('pt-br').format('YYYY-MM-DD');
        return dataAmericana + 'T00:00:00'
    }
    return undefined;
}

function dataAmericanaParaISO(data) {
    if (data){
        return moment(data).locale('pt-br').format('YYYY-MM-DD');
    }
}


export default {
    dataIso,
    dataHoraIso,
    dataIsoAmericana,
    dataAmericanaParaISO,
    dataAmericana
}