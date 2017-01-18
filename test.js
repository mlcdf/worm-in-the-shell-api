import test from 'ava'
import micro from 'micro'
import request from 'request-promise'
import listen from './index'

const send = micro.send

test('/', async t => {
  const fn = async function (req, res) {
    send(res, 200, {section: 'start'})
  }
  const url = await listen(fn)
  const body = await request(url)
  t.is(body.test, 'woot')
})
