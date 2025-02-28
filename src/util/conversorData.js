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

export default {
    MaskDataIso,
    MaskDataHoraIso
}