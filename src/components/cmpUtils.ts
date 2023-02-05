export const totalCost = ( data: any, aVal: string | number, bVal: string | number ): number => {
    let tmp = []
    for ( let i = 0; i < data.length; i++ ) {
        tmp.push( data[ i ][ aVal ] + data[ i ][ bVal ] )
    }
    let totalSum = tmp.reduce(( prev, curr ) => {
            return prev + curr
    } )

    return totalSum
}