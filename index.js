const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express();

app.options('*', cors())
app.use(cors())

const letters = [
  'a', 'i', 'u', 'e', 'o',
  'ka', 'ki', 'ku', 'ke', 'ko',
  'sa', 'shi', 'su', 'se', 'so',
  'ta', 'chi', 'tsu', 'te', 'to',
  'na', 'ni', 'nu', 'ne', 'no',
  'ha', 'hi', 'fu', 'he', 'ho',
  'ma', 'mi', 'mu', 'me', 'mo',
  'ya', 'yu', 'yo',
  'ra', 'ri', 'ru', 're', 'ro',
  'wa', 'wo',
  'n',
  // 'ga', 'gi', 'gu', 'ge', 'go',
  // 'za', 'ji', 'zu', 'ze', 'zo',
]

const numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']

const hiraBase = 'https://www.nhk.or.jp/lesson/assets/images/letters/hira/'
const kataBase = 'https://www.nhk.or.jp/lesson/assets/images/letters/kana/'
const kanjiBase = 'https://www.nhk.or.jp/lesson/assets/images/letters/kanji/'

const hiraSylla = letters.map(letter => ({
  type: 'hiragana',
  letter,
  image: `${hiraBase}${letter}.png`
}))

const kataSylla = letters.map(letter => ({
  type: 'katakana',
  letter,
  image: `${kataBase}${letter}.png`
}))

const kanjiSylla = numbers.map(number => ({
  type: 'kanji',
  number,
  image: `${kanjiBase}${number}.png`
}))

app.get('/silabario', (req, res) => res.send({
  results: [...hiraSylla, ...kataSylla, ...kanjiSylla],
  filters: ['hiragana', 'katakana', 'kanji']
}))

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});
