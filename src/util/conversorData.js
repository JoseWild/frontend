import moment from 'moment'

function MaskDataIso(data) {
    if (data) {
        return moment(data).locale('pt-br').format('DD/MM/YYYY');
    }
    return undefined
}


function MaskDataHoraIso(data) {
    if (data) {
        return moment(data).locale('pt-br').format('DD/MM/YYYY HH:mm:ss');
    }
    return undefined
}

function MaskDataAmericana(data) {
    if (data) {
        let dataAmericana = moment(data).locale('pt-br').format('YYYY-MM-DD')
        return dataAmericana + 'T00:00:00' ;
    }
}


function MaskDataAmericanaISO(data) {
    if (data) {
        return moment(data).locale('pt-br').format('YYYY-MM-DD')
    }
}



export default {
    MaskDataIso,
    MaskDataHoraIso,
    MaskDataAmericana,
    MaskDataAmericanaISO

}