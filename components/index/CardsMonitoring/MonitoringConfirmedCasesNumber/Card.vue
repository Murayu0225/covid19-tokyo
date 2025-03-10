<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard MonitoringConfirmedCasesNumberCard"
  >
    <client-only>
      <chart
        :title="$t('モニタリング項目(1)')"
        title-id="monitoring-number-of-confirmed-cases"
        :info-titles="[$t('新規陽性者数')]"
        chart-id="monitoring-confirmed-cases-number-chart"
        :chart-data="chartData"
        :date="date"
        :labels="labels"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
        :get-formatter="getFormatter"
        :unit="$t('人')"
        url="https://catalog.data.metro.tokyo.lg.jp/dataset/t000001d0000000011"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '2022年9月27日以降は総数のみの集計であり、2022年9月26日以前は保健所からの発生届の報告日を基準とした集計である'
                )
              }}
            </li>
            <li>
              {{ $t('医療機関等が行った検査も含む') }}
            </li>
            <li>
              {{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
            </li>
            <li>
              {{
                $t(
                  '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を折れ線グラフで示す（例えば、2020年5月7日の移動平均値は、2020年5月1日から5月7日までの実績値を平均したもの）'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '2022年2月2日以降は、感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む'
                )
              }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import Chart from '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumber/Chart.vue'
import {
  DailyPositiveDetail as IDailyPositiveDetail,
  Datum as IDailyPositiveDetailDatum,
} from '@/libraries/auto_generated/data_converter/convertDailyPositiveDetail'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'
import { isSingleCard } from '@/utils/urls'

type Data = {
  dataLabels: string[]
  tableLabels: string[]
  getFormatter: (columnIndex: number) => (d: number) => string | undefined
}
type Methods = {}
type Computed = {
  chartData: [number[], (number | null)[]]
  date: string
  labels: string[]
  dailyPositiveDetailData: IDailyPositiveDetailDatum[]
  dailyPositiveDetail: IDailyPositiveDetail
  isSingleCard: boolean
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const dataLabels = [
      this.$t('陽性者数') as string,
      this.$t('７日間移動平均') as string,
    ]
    const tableLabels = [
      this.$t('陽性者数') as string,
      this.$t('７日間移動平均') as string,
    ]

    const getFormatter = (columnIndex: number) => {
      // モニタリング指標(1)新規陽性者数の7日間移動平均は小数点第1位まで表示する。
      if (columnIndex === 1) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      dataLabels,
      tableLabels,
      getFormatter,
    }
  },
  computed: {
    chartData() {
      const patientsCounts: number[] = this.dailyPositiveDetailData.map(
        (d) => d.count
      )

      const weeklyAverageCounts: (number | null)[] =
        this.dailyPositiveDetailData.map((d) => d.weeklyAverageCount)

      return [patientsCounts, weeklyAverageCounts]
    },
    date() {
      return this.dailyPositiveDetail.date
    },
    labels() {
      return this.dailyPositiveDetailData.map((d) => `${d.diagnosedDate}`)
    },
    dailyPositiveDetailData() {
      return this.dailyPositiveDetail.data
    },
    dailyPositiveDetail() {
      return this.$store.state.dailyPositiveDetail
    },
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
})
</script>
