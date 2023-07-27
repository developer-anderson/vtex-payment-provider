import { PaymentProviderService } from '@vtex/payment-provider'

import Btg from './middlewares/Btg'

export default new PaymentProviderService({
  connector: Btg,
})
