import React from 'react'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import Countup from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'


const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate, } }) => {
    
    if (!confirmed) {
        return 'loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12}  md={3} >
                    <Card className={cx(styles.card,styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom> Infected  </Typography>
                            <Typography variant="h5"><Countup start={0} end={confirmed.value} duration={3} separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of active cases of Covid 19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12}  md={3} >
                    <Card className={cx(styles.card,styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom> Recovered  </Typography>
                            <Typography variant="h5"><Countup start={0} end={recovered.value} duration={3} separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of recoveries from Covid 19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} >
                    <Card className={cx(styles.card,styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom> Deaths  </Typography>
                            <Typography variant="h5"><Countup start={0} end={deaths.value} duration={3} separator=","/></Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of death cause by Covid 19</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;